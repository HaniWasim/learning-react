import style from './css/userprofile.module.css'

function Userprofile(params) {
  return (
    <div className={style.container}>
        <img className={style.img}
          src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className={style.textWrap}>
          <h3>Hani Khan</h3>
          <p>A Billioner</p>
        </div>
     
    </div>
  );
}
export default Userprofile;