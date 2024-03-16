import MenuItem from "./MenuItem";
import {motion} from 'framer-motion'

const Menu = () => {
    const items = [
        {
        href:'/',
        title:'Home',
        hasarrow:false,
      },
      {
        href:'/services',
        title:'Services',
        hasarrow:true,
      },
      {
        href:'/projects',
        title:'Projects',
        hasarrow:true,
      },
      {
        href:'/about',
        title:'About',
        hasarrow:false,
      },
      {
        href:'/contact',
        title:'Contact',
        hasarrow:false,
      }
    ]

    const services = [
      {
      href:'/',
      title:'Home'
    },
    {
      href:'/services',
      title:'Services'
    },
    {
      href:'/projects',
      title:'Projects'
    },
    {
      href:'/about',
      title:'About'
    },
    {
      href:'/contact',
      title:'Contact'
    }
  ]
    
    return (
      <div style={{display:'flex',gap:'3rem'}}>
        <motion.div className="full-screen-menu-grid-left" > 
        {items.map((i,index)=>(
          <MenuItem hasarrow={i.hasarrow} href={i.href} title={i.title} i={index} />
        ))}
      </motion.div>
      <motion.div className="full-screen-menu-grid-left" style={{background:'white',padding:'2rem'}}> 
        {items.map((i,index)=>(
          <MenuItem href={i.href} title={i.title} i={index} submenu={true}/>
        ))}
      </motion.div>
      </div>
    )
}
   
   
   export default Menu;
   