import { JSON_DESCRIPTION } from "../../constants.js"
import { Code } from "lucide-react"

function ItemJson({index, keyJson}) {
    return (       
        <div key={index} style={{paddingLeft: '24px', lineHeight: '2.2rem'}}>
            <span style={{color: "#facc15"}}>{`"${keyJson}"`}</span>
            <span style={{color: '#fff'}}>
                {': ' + (keyJson === 'skills' ? '[' : '')}
                {keyJson === 'available' && <span style={{color: '#60a5fa'}}>{'true'}</span>}
            </span>
            <span style={{color: '#4ade80', lineHeight: '1.4rem'}}>
                {
                    keyJson === 'skills' 
                        ? JSON_DESCRIPTION[keyJson].map((skill, index) => {
                            return (
                                <div key={skill} style={{paddingLeft: '24px', marginTop: '4px'}}>
                                    <span>
                                        {`"${skill}"` + (index === JSON_DESCRIPTION[keyJson].length - 1 ? '' : ' ,')}
                                    </span>
                                </div>
                            )
                    }) : JSON_DESCRIPTION[keyJson]
                }
            </span>
            {keyJson === 'skills' && <span style={{color: '#fff'}}>{'],'}</span>}
        </div>

    )
}

export function MyInfoJson() {
    return (
        <div className="info-json">
            <div className="container-info-json">
                <Code className='code-icon' />
                <div style={{margin: '1rem'}}>
                    <div style={{color: '#22d3ee'}}>{'{'}</div>
                        {Object.keys(JSON_DESCRIPTION).map((key, index) => (
                            <ItemJson 
                                key={index} 
                                index={index} 
                                keyJson={key} 
                            />
                        ))}
                    <div style={{color: '#22d3ee'}}>{'}'}</div>
                </div>
            </div>
        </div>
    )
}