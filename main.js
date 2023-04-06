let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #4E3413;">Estudiante de Ingeniería de Computación y desarrolladora front-end</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
