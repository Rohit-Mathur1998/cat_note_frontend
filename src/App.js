// import NoteForm from "./components/NoteForm";
// import NoteList from "./components/NoteList";
// import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

// function App() {
//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             Cat Notes 📝
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Container sx={{ mt: 4 }}>
//         <NoteForm onAdd={() => window.location.reload()} />
//         <NoteList />
//       </Container>
//     </>
//   );
// }

// export default App;

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Grid,
//   CssBaseline,
// } from "@mui/material";
// import NoteForm from "./components/NoteForm";
// import NoteList from "./components/NoteList";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             🐱 Cat Notes
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Container sx={{ mt: 4 }}>
//         <NoteForm />
//         <NoteList />
//       </Container>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNoteAdded = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            🐱 Cat Notes
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <NoteForm onNoteAdded={handleNoteAdded} />
        <NoteList notes={notes} setNotes={setNotes} />
      </Container>
    </>
  );
}

export default App;
