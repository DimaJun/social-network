import {AppLayout} from "@/shared/layouts/AppLayout";
import {Navbar} from "@/widgets/Navbar";
import {Sidebar} from "@/widgets/Sidebar";

export function App() {
    return (
        <div className='app'>
            <AppLayout navbar={<Navbar/>} sidebar={<Sidebar/>}/>
        </div>
    )
}
