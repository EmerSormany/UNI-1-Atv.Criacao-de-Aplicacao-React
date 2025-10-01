import './SideBarRight.css'
import styles from './ModulesCSS.module.css'
import DivStyled from './DivStyled';
import DivTailwind from './DivTailwind';

function SideBarRight() {
    return (
        <div className='side-right-bar'>
            <h4>Estilizações</h4>
            <div style={{backgroundColor:"#ecf0f1", borderRadius:'4px', paddingTop: '30px', paddingBottom:'5px', textAlign: 'center', margin: '5px'}}>
                <button style={{backgroundColor: '#357abd', borderRadius:'4px', border: 'none', cursor:'pointer'}}>Inline</button>
            </div>
            <div className={styles.CSSModulesCard}>
                <button className={styles.CSSModules}>CSS Modules</button>
            </div>
            <DivStyled>
                <button>
                    Styled
                    Components
                </button>
            </DivStyled>
            <DivTailwind/>
        </div>
    )
}

export default SideBarRight;