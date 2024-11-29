const Spinner = (): JSX.Element => {
  return (
    <div
      className="w-8 h-8 rounded-full border-2 border-zinc-800/30 border-t-white animate-spin"
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner;