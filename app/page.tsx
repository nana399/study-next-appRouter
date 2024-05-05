import NotesLlist from './components/notes-list'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World😃</p>
        {/* @ts-ignore */}
        <NotesLlist />
      </div>
    </main>
  )
}
