import style from './index.module.css';
const NavBar = () => {
    return(
        <>
            <div className={style.navbar}>
                <h4>Works</h4>
                <h4>Blog</h4>
                <h4 >Contact</h4>
            </div>
        </>

    )
}
export default NavBar;