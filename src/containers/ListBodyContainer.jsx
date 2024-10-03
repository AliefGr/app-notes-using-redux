import { connect } from "react-redux";
import NoteLIstBody from "../component/NoteLIstBody";
import { getNotes, deleteNote, archiveNote} from "../action";
import keyword from "../reducer/Keyword";

const mapStateToProps = (state) => ({
    notes : state.notes,
    keyword : state.keyword
});

const mapDispatchToProps = {
    getNotes,
    OnDeleteNote : deleteNote,
    OnArchiveNote : archiveNote,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteLIstBody);
