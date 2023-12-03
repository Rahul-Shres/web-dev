import React, { useEffect, useState } from 'react'


const DocumentTitle = () => {
    const [title, setTitle] = useState('')
    useEffect(() => {
        document.title = title
    }, [title])
    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )

}

export default DocumentTitle