import { Zap, FileUser, Code  } from 'lucide-react'
import '../styles/pages/HomeApp.css'

import { CARDS_INFO } from '../constants.js'

import { VariableDescription } from '../components/pages/VariableDescription.jsx'
import { MyInfoJson } from '../components/pages/MyInfoJson.jsx'

export function HomeApp() {
    return (
        <main className="home-app">
            <section className="principal-container">
                <div className="variable">
                    <div className='declaration'>
                        <span style={{color: 'yellow'}}>const</span> <span style={{opacity: '0.7'}}>developer</span> = {'{'}
                    </div>
                    <div style={{paddingLeft: '8px', margin: '3rem', gap: '1.5rem', display: 'flex', flexDirection: 'column'}}>
                        <h2 className='developer-name'>
                            Hi, I'm
                            <br />
                            <span className='my-name-gradient'>
                                Jeisson
                            </span>
                        </h2>
                        <VariableDescription />
                    </div>
                    <div style={{paddingLeft: '0px', fontSize: '16px'}}>
                        {'}'}
                    </div>
                    <div className="buttons">
                        <button className='button-projects'>
                            <Zap style={{width: '20px', height: '20px'}}/>
                            Show projects
                        </button>
                        <button className='button-cv'>
                            <FileUser style={{width: '20px', height: '20px'}}/>
                            Download CV
                        </button>
                    </div>
                </div>
                <MyInfoJson />
                <div className="cards-info">
                    {CARDS_INFO.map((item, i) => {
                        return (
                            <div key={i} className='card-info-item'>
                                <div className="value-item">
                                    {item.value}
                                </div>
                                <div className="label-item">
                                    {item.label}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}