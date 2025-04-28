const loopMap = new WeakMap();

function getDomKey(player) {
  return player?.element || player?.container || player;
}

export function createPlayOnceFn(startMs, endMs) {
  return function(player) {
    const key = player?.element || player?.container || player;
    let startTime = null;
    let frameId = null;
    let playing = true;

    console.log("[createPlayOnceFn] Start playback from", startMs, "to", endMs);

    const frame = (timestamp) => {
      if (!playing) return;

      if (!startTime) {
        startTime = timestamp;
        player.seekTo(startMs);
        player.play();
      }

      const elapsed = timestamp - startTime;

      if (elapsed >= endMs - startMs) {
        player.pause();
        playing = false;
        return; // 🛑 termina qui senza richiedere un nuovo frame
      }

      frameId = requestAnimationFrame(frame);
    };

    frameId = requestAnimationFrame(frame);

    // Salva stop sicuro
    loopMap.set(key, () => {
      console.log("[stopPlayOnce] Fermato play-once per player con key:", key);
      playing = false;
      cancelAnimationFrame(frameId);
      player.pause();
    });
  };
}


export function createLoopFn(startMs, endMs) {
  return function(player) {
    const key = getDomKey(player);
    let loop = true;
    let startTime = null;
    let frameId = null;

    console.log("[createLoopFn] Inizio loop per player con key:", key);

    const frameLoop = (timestamp) => {
      if (!loop) return;

      if (!startTime) {
        startTime = timestamp;
        player.seekTo(startMs);
        player.play();
      }

      const elapsed = timestamp - startTime;

      if (elapsed >= endMs - startMs) {
        player.pause();
        startTime = null;
      }

      frameId = requestAnimationFrame(frameLoop);
    };

    frameId = requestAnimationFrame(frameLoop);

    loopMap.set(key, () => {
      console.log("[stopLoop] Fermato loop per player con key:", key);
      loop = false;
      cancelAnimationFrame(frameId);
      player.pause();
    });
  };
}

export function stopLoop(player) {
  const key = getDomKey(player);
  console.log("[stopLoop] Tentativo di stop loop per player con key:", key);

  if (loopMap.has(key)) {
    const stopFn = loopMap.get(key);
    if (typeof stopFn === "function") {
      stopFn();
    }
    loopMap.delete(key);
  } else {
    console.warn("[stopLoop] Nessun loop registrato per questo player con key:", key);
  }
}
