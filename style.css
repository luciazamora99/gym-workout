:root{
  --bg:#fff;
  --text:#1b1b1b;
  --gray:#f5f5f5;
  --gray2:#cfcfcf;
  --shadow:rgba(0,0,0,.12);
  --radius:18px;
  --primary:#2b2b2b;
  --accent:#3d3536;
}

*{box-sizing:border-box;}

body{
  font-family: 'Montserrat', Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

header{
  position: relative;
  text-align: center;
  padding: 60px 20px;
  box-shadow: 0 10px 30px var(--shadow);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  overflow: hidden;
}

header .header-bg{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

header::after{
  content:"";
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.65);
  z-index: 1;
}

header .header-text{
  position: relative;
  z-index: 2;
}

header h1{
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  color: #1b1b1b;
}

header p{
  margin-top: 8px;
  font-size: 1.05rem;
  color: #333;
}

table, th, td {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1rem;
}

header h1::after{
  content: "";
  display: block;
  width: 180px;
  height: 6px;
  background: #d1aaaa;
  margin: 10px auto 0;
  border-radius: 999px;
}

/* MENU */
.menu{
  background: var(--bg);
  width:100%;
  padding:10px 0;
  box-shadow:0 8px 24px var(--shadow);
}

.menu ul{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  justify-content:center;
  gap:18px;
}

.menu a{
  color:var(--text);
  font-weight:700;
  text-decoration:none;
  padding:10px 14px;
  border-radius:999px;
  transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
}

.menu a:hover{
  background: rgba(0,0,0,.08);
  transform: translateY(-2px);
  box-shadow:0 6px 18px rgba(0,0,0,.12);
}

/* TABLA */
table{
  width: 85%;
  max-width: 900px;
  margin: 40px auto;
  border-collapse: separate;
  border-spacing:0;
  border: 1px solid var(--gray2);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0,0,0,.10);
}

th, td{
  padding: 14px 18px;
  text-align:left;
}

th{
  background:#000;
  color:#fff;
  font-weight:700;
  font-size: 0.95em;
}

tbody tr{
  background:var(--gray);
  transition: transform .25s ease, box-shadow .25s ease;
}

tbody tr:hover{
  transform: translateY(-2px);
  box-shadow:0 10px 24px rgba(0,0,0,.12);
}

tbody tr.hoy{
  font-weight: 700;
}

td{
  border-bottom: 1px solid var(--gray2);
}

/* BOTÓN “VER RUTINA” */
.ver-rutina {
  background: rgba(61, 53, 54, 0.08);
  color: #3d3536;
  padding: 6px 10px;
  text-decoration: none;
  border-radius: 999px;
  font-size: 0.85em;
  font-weight:600;
  border: 1px solid rgba(61, 53, 54, 0.25);
}

.ver-receta {
  background: rgba(61, 53, 54, 0.08);
  color: #3d3536;
  padding: 6px 10px;
  text-decoration: none;
  border-radius: 999px;
  font-size: 0.85em;
  font-weight:600;
  border: 1px solid rgba(61, 53, 54, 0.25);
}


.ver-rutina:hover {
  background: #d1aaaa;
}

/* FOOTER */
footer{
  text-align:center;
  padding:22px 12px;
  background:var(--gray);
  box-shadow:0 -6px 18px var(--shadow);
  margin-top:30px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
}

/* MODAL */
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.55);
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.modal-content {
  background: #fff;
  padding: 26px 26px 22px 26px;
  border-radius: 22px;
  width: 100%;
  max-width: 560px;
  box-shadow: 0 18px 45px rgba(0,0,0,0.18);
  position: relative;
  font-family: 'Poppins', Arial, sans-serif;
}

.modal h2 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--primary);
  letter-spacing: 0.5px;
}

.modal-title {
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  margin-bottom: 28px; /* MÁS separación real */
}

.modal-body {
  padding-top: 18px; /* MÁS separación real */
  font-size: 1rem;
  color: #333;
  line-height: 1.75;
}

.modal-body ul {
  margin: 0;
  padding-left: 0;
  list-style: none; /* sin viñetas */
}

.modal-body p {
  margin: 0;
  padding: 0;
}

.modal-body .exercise {
  margin-bottom: 10px;
}

.close-btn {
  position: absolute;
  right: 16px;
  top: 14px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  border: 1px solid var(--gray2);
  transition: transform .2s ease, background .2s ease;
}

.close-btn:hover {
  background: #e9e9e9;
  transform: translateY(-1px);
}


.close-btn:hover {
  background: #e9e9e9;
  transform: translateY(-1px);
}

/* BOTÓN dentro del modal (opcional) */
.modal-actions {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal-actions .btn {
  padding: 8px 14px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid var(--accent);
  background: rgba(61, 53, 54, 0.08);
  color: var(--accent);
  transition: transform .2s ease, background .2s ease;
}

.modal-actions .btn:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-1px);
}
