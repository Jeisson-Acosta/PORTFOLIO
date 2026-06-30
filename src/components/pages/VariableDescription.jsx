import { OBJECT_DESCRIPTION } from "../../constants.js"

export function VariableDescription() {
    return Object.keys(OBJECT_DESCRIPTION).map((key, index) => {
        return (
            <div className='elements-description-item' key={index}>
                <span style={{color: '#facc15'}}>
                    {key}:
                </span>
                <span style={{color: key === 'status' ? '#4ade80' : '#fff'}}>
                    {`"${OBJECT_DESCRIPTION[key]}"`}
                </span>
            </div>
        )
    })
}