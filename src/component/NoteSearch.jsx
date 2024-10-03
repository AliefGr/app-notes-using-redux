const NoteSearch = ({onSearchNotes}) => {
  
  const handleSerach = (e) => {
    const keyword = e.target.value;
    onSearchNotes(keyword);
  }

  return (
    <div className='note-search'>
        <input onChange={handleSerach} type="text" placeholder='Cari...'/>
    </div>
  )
}

export default NoteSearch