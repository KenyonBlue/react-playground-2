import React, { useState } from "react";

export default function UpdatedComponent(Component: any) {
    function NewComponent (props: any){
        const [count, setCount] = useState(0)
        return <Component count={count} updateCount={() => setCount((count) => count + 1)} name='Alice'/>
    }
    return NewComponent;
}