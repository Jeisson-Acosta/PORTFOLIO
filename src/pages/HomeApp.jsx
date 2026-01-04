import { Zap, FileUser, Code  } from 'lucide-react'
import '../styles/pages/HomeApp.css'
import { OBJECT_DESCRIPTION, JSON_DESCRIPTION } from '../constants.js'

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
                        {Object.keys(OBJECT_DESCRIPTION).map((key, index) => {
                            return (
                                <div className='elements-description-item' key={index}>
                                    <span style={{color: '#facc15'}}>
                                        {key}:
                                    </span>
                                    <span style={{color: '#fff'}}>
                                        {`"${OBJECT_DESCRIPTION[key]}"`}
                                    </span>
                                </div>
                            )
                        })}
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
                            Descargar CV
                        </button>
                    </div>
                </div>
                <div className="info-json">
                    <div className="container-info-json">
                        <Code className='code-icon' />
                        <div style={{margin: '1rem'}}>
                            <div style={{color: '#22d3ee'}}>{'{'}</div>
                            {Object.keys(JSON_DESCRIPTION).map((key, index) => {
                                return (
                                    <div key={index} style={{paddingLeft: '24px', lineHeight: '2.2rem'}}>
                                        <span style={{color: "#facc15"}}>{`"${key}"`}</span>
                                        <span style={{color: '#fff'}}>
                                            {': ' + (key === 'skills' ? '[' : '')}
                                            {key === 'available' && <span style={{color: '#60a5fa'}}>{'true'}</span>}
                                        </span>
                                        <span style={{color: '#4ade80', lineHeight: '1.4rem'}}>
                                            {
                                                key === 'skills' 
                                                    ? JSON_DESCRIPTION[key].map((skill, index) => {
                                                        return (
                                                            <div key={skill} style={{paddingLeft: '24px', marginTop: '4px'}}>
                                                                <span>
                                                                    {`"${skill}"` + (index === JSON_DESCRIPTION[key].length - 1 ? '' : ' ,')}
                                                                </span>
                                                            </div>
                                                        )
                                                }) : JSON_DESCRIPTION[key]
                                            }
                                        </span>
                                        {key === 'skills' && <span style={{color: '#fff'}}>{'],'}</span>}
                                    </div>
                                )
                            })}
                            <div style={{color: '#22d3ee'}}>{'}'}</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}