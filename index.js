let guitar = new Howl({
    src: ['./audio/guitar.mp3']
  });
  
  let mic = new Howl({
    src: ['./audio/mic.mp3']
  });
  
  let drums = new Howl({
    src: ['./audio/drums.mp3']
  });
  
  let piano = new Howl({
    src: ['./audio/piano.mp3']
  });
  
  let audioMap = {
    'guitar': guitar,
    'drums': drums,
    'piano': piano,
    'mic': mic
  };
  
  guitar.play();
  mic.play();
  drums.play();
  piano.play();
  
  window.onload = function () {
    let arMarkers = document.getElementsByClassName('ar-marker');
  
    Array.from(arMarkers).forEach(function (arMarker) {
      let name = arMarker.getAttribute('name');
      arMarker.addEventListener('markerFound', function () {
        audioMap[name].mute(false);
      });
      arMarker.addEventListener('markerLost', function () {
        audioMap[name].mute(true);
      });
    });
  };