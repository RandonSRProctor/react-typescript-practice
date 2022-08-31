import { ChildAsFC } from './Child'

const Parent = () => {
    return <ChildAsFC color="blue" onClick={() => console.log('Clicked!')} >
        test
    </ChildAsFC >
}

export default Parent