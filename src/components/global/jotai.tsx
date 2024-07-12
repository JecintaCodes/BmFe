import {useAtom} from "jotai"
import {atomWithStorage} from "jotai/utils"


const signInBuyer = atomWithStorage("myBuyer", {}  || null)

const useBuyer = ()=>{
    return useAtom(signInBuyer)
}

export default useBuyer