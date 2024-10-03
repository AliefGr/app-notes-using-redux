import { connect } from "react-redux";
import CretaeNote from "../component/CretaeNote";
import { addNote } from "../action";

const mapDispatchToProps = {
    onCreateNote : addNote,
}

export default connect(null, mapDispatchToProps)(CretaeNote);