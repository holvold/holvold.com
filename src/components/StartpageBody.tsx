import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import '../App.css';
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";
import 'font-awesome/css/font-awesome.min.css';
import '../styling/startpageBody.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tooltip } from "reactstrap"
import ReactSwitch from "react-switch"

const StartPageBody = () => {
  const [showTooltip, setShowToolTip] = useState(false)
  const [theme, setTheme] = useState('light')
  const [copied,setIsCopied] = useState(false)

  
  const toggleTheme = () => {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light' )
  }
  
  const copyEmail = () => {
    setIsCopied(true)
    navigator.clipboard.writeText('holvold.emil@gmail.com')
  }

  const toggleTooltip = () => {
    setShowToolTip(!showTooltip)
    if(copied && !showTooltip){
      setIsCopied(false)
    }
  }

  let copyButton
    if (copied) {
      copyButton = <i style={{color: "green"}} className="fa fa-check link-icons" aria-hidden="true" onClick={copyEmail} />
    } else {
      copyButton = <i className="fa fa-clone link-icons" aria-hidden="true" onClick={copyEmail} />
    }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, [])

  return(
    <div className="App" id={theme}>
      <header className="App-header">
        <div  style={{zIndex:3, fontSize: '1.5rem'}}>
          <a
            href="https://www.linkedin.com/in/emil-hölvold-1678a0170/"
            target="_blank"
            rel="noreferrer"
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            <i className="fa fa-linkedin link-icons" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/holvold/"
            target="_blank"
            rel="noreferrer"
            style={{textDecoration: 'none',  color: 'inherit'}}
          >
            <i className="fa fa-github link-icons" aria-hidden="true" />
          </a>
          <i id='mail-icon' className="fa fa-envelope link-icons" aria-hidden="true" />
          <Tooltip style={{display: 'flex', alignItems: "center"}} placement='top' isOpen={showTooltip} autohide={false} target='mail-icon' toggle={toggleTooltip}>
            holvold.emil@gmail.com
            {copyButton}
          </Tooltip>
        </div>
        <h1 className="nameText">
            Emil Hölvold.
        </h1>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: "center", zIndex:3}}>
            <ReactSwitch 
              checked={theme === 'dark'} 
              onChange={toggleTheme}
              offColor='#291111'
              onColor='#DCDBDB'
              offHandleColor="#DCDBDB"
              onHandleColor="#291111"
              uncheckedIcon={<i style={{paddingLeft: "8px", paddingTop: "6px" }} className="fa fa-moon-o" />}
              checkedIcon={<i style={{color: "black", paddingLeft: "8px", paddingTop: "6px" }} className="fa fa-sun-o" />}
            />
        </div>
      </header>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
    </div>
  )
}

export default StartPageBody