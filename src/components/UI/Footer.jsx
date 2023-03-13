import React  from 'react';
import classes from './Footer.module.css';
import { Icon } from '@iconify/react';



const Footer=()=>{
    return (
        <div className={classes.footer}>
<div class={classes.footer_content}>
   <h3 className={classes.content}>G-mart</h3>
   <p>Buy good online</p>
   <ul className={classes.socials}>
<li><a className={classes.socialsa} href=''><Icon className={classes.aa} icon={"ic:round-facebook"}/> </a> </li> 
<li><a className={classes.socialsa} href=''><Icon className={classes.aa} icon={"icon-park:twitter"}/></a> </li>
<li><a className={classes.socialsa} href=''><Icon  className={classes.aa} icon={"mdi:github"}/> </a></li>
<li><a className={classes.socialsa} href=''> <Icon className={classes.aa} icon={"ph:youtube-logo-fill"}/></a></li>
   </ul>
</div>
<div className={classes.bottom}>
    <p> copyright &copy;2021 </p>

</div>

        </div>

    );
}

export default Footer;