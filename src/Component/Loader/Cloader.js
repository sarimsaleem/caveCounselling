import './loader.css'
import { Spin } from "antd";
function Cloader() {
    return (
        <div>
            <div className="loading-spinner">
                {/* You can also use a spinner here */}
                    <Spin size="large" />
            </div>
        </div>
    )
}

export default Cloader