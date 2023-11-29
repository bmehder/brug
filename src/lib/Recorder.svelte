<script>
	export let width = null
	export let height = null
	export let audio = true
	export let framerate = 60

	let state = 'ready'
	let recorder = null
	let stream = null
	let videoChunks = []
	let timerInterval = null
	let timer = 3

	async function startTimer() {
		state = 'countdown'

		return new Promise(resolve => {
			timerInterval = setInterval(() => {
				--timer
        if (timer === 0) {
          clearInterval(timerInterval)
          resolve(timer)
        }
			}, 1000)
		})
	}

  function downloadRecording(videoChunks) {
    const blob = new Blob(videoChunks, { type: 'video/webm;codecs=vp9' })

    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'video.webm'
    a.click()
  }

  function stopRecording() {
    state = 'ready'
    stream.getTracks().forEach(track => {
      track.stop()
    })
    recorder && recorder.stop()
    clearInterval(timerInterval)
    timer = 3
  }
  
  function startRecording() {
    state = 'recording'
    recorder = new MediaRecorder(stream, {mimeType: 'video/webm;codecs=vp9'})
    recorder.start()

    recorder.addEventListener('dataavailable', evt => {
      videoChunks.push(evt.data)
    })

    recorder.addEventListener('stop', () => {
      downloadRecording(videoChunks)
      videoChunks = []
    })
  }

	async function prepareRecording() {
		try {
			stream = await navigator.mediaDevices.getDisplayMedia({
				video: { width, height, framerate },
				audio,
				selfBrowserSurface: 'include',
			})

      stream.addEventListener('inactive', stopRecording)

			await startTimer()
      startRecording()
		} catch (err) {
			console.error(err)
		}
	}

	function handleKeydown(evt) {
		switch (evt.key) {
			case 'R':
				if (state === 'ready') {
					prepareRecording()
				}
				break
			case 'S':
				if (state !== 'ready') {
					stopRecording()
				}
				break
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="container">
	{#if state === 'ready' || state === 'countdown'}
		<div class="recorder" data-state={state}>
			<button class="record" on:click={prepareRecording}>
				<div class="circle">
					{#if state === 'countdown'}
						{timer}
					{/if}
				</div>
			</button>

			<div class="info">
				{#if state === 'ready'}
					<p class="shortcut">Shift + R</p>
					<p class="description">To start recording</p>
				{/if}
				{#if state === 'countdown'}
					<p class="shortcut">Shift + S</p>
					<p class="description">To stop recording</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	button:hover {
		outline: none;
	}

	.recorder {
		--txt-clr: hsl(0 0% 98%);
		--circle-bg-clr: hsl(0 100% 60%);
		--circle-border-clr: hsl(0 0% 98%);

		color: var(--txt-clr);
		text-align: center;
	}

	[data-state='countdown'] {
		& .circle {
			--txt-clr: hsl(0 0% 10%);
			--circle-bg-clr: hsl(0 100% 98%);
		}
	}

	.record {
		width: 80px;
		height: 80px;
		padding: 4px;
		border: 4px solid var(--circle-border-clr);
		border-radius: 50%;
	}

	.circle {
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
		font-family: inherit;
		font-size: var(--size);
		font-weight: 700;
		color: var(--txt-clr);
		background-color: var(--circle-bg-clr);
		border-radius: 50%;
		transition: background-color 0.6s;

		&:hover {
			--circle-bg-clr: hsl(0 100% 64%);
		}
	}

	.info {
		margin-block-start: var(--size);

		& .shortcut {
			font-weight: 700;
		}

		& .description {
			margin-block-start: 4px;
			opacity: 0.6;
		}
	}
</style>
