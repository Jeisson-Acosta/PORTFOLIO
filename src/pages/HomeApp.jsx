import { Zap, FileUser  } from 'lucide-react'
import '../styles/pages/HomeApp.css'
import { OBJECT_DESCRIPTION } from '../constants.js'

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
                            Hola, soy
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
            </section>
        </main>
    )
}