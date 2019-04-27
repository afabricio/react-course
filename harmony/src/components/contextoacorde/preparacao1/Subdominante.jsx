import React from 'react'
import './Subdominante.css'

import Subdominante1 from './Subdominante1'
import Subdominante2 from './Subdominante2'
import Subdominante3 from './Subdominante3'

export default props =>
                <div className="subdominante">
                        <Subdominante1 {...props} />
                        <Subdominante2 {...props} />
                        <Subdominante3 {...props} />
                </div>