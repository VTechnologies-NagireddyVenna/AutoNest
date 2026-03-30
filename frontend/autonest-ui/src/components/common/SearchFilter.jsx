function SearchFilter({ searchTerm, setSearchTerm }) {
  return (
    <div className="row mb-4">
      <div className="col-md-6 mx-auto">
        <input
          type="text"
          className="form-control form-control-lg shadow-sm"
          placeholder="Search by brand, model, location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchFilter;
