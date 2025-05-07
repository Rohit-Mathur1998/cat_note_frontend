// import { useState } from "react";
// import axios from "axios";
// import { TextField, Button, Box, Paper, Typography } from "@mui/material";

// const NoteForm = ({ onAdd }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post("/api/notes", { title, content });
//     onAdd(res.data);
//     setTitle("");
//     setContent("");
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//       <Typography variant="h6" gutterBottom>
//         Add a New Note
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} noValidate>
//         <TextField
//           fullWidth
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           margin="normal"
//           required
//         />
//         <TextField
//           fullWidth
//           multiline
//           rows={4}
//           label="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           margin="normal"
//           required
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//           sx={{ mt: 2 }}
//         >
//           Add Note
//         </Button>
//       </Box>
//     </Paper>
//   );
// };

// export default NoteForm;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   List,
//   ListItem,
//   IconButton,
//   TextField,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// // import NoteList from "./NoteList"; // Import your form

// const NoteForm = () => {
//   const [notes, setNotes] = useState([]);
//   const [query, setQuery] = useState("");

//   const fetchNotes = async () => {
//     const res = await axios.get("http://localhost:5000/api/notes");
//     setNotes(res.data);
//   };

//   const searchNotes = async () => {
//     if (!query) return fetchNotes();
//     const res = await axios.get(
//       `http://localhost:5000/api/notes/search?q=${query}`
//     );
//     setNotes(res.data);
//   };

//   const deleteNote = async (id) => {
//     await axios.delete(`http://localhost:5000/api/notes/${id}`);
//     fetchNotes();
//   };

//   const handleNoteAdded = (newNote) => {
//     setNotes([newNote, ...notes]);
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   return (
//     <>
//       {/* ✅ Only use NoteForm here */}
//       {/* <NoteForm onNoteAdded={handleNoteAdded} /> */}

//       {/* Search Section */}
//       <Box display="flex" gap={2} mb={4}>
//         <TextField
//           fullWidth
//           placeholder="Search notes or cat facts..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <Button variant="outlined" onClick={searchNotes}>
//           Search
//         </Button>
//       </Box>

//       {/* Notes List */}
//       <List>
//         {notes.map((note) => (
//           <ListItem
//             key={note._id}
//             sx={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               mb: 2,
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Card sx={{ width: "100%" }}>
//               <CardContent>
//                 <Box display="flex" justifyContent="space-between">
//                   <Typography variant="h6">{note.title}</Typography>
//                   <IconButton onClick={() => deleteNote(note._id)} size="small">
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//                 <Typography variant="body2" sx={{ mt: 1 }}>
//                   {note.content}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   color="text.secondary"
//                   sx={{ mt: 2, display: "block" }}
//                 >
//                   🐱 {note.catfact}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default NoteForm;

import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

const NoteForm = ({ onNoteAdded }) => {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [error, setError] = useState("");

  const addNote = async () => {
    setError(""); // Reset previous error
    try {
      if (!newNote.title || !newNote.content) {
        setError("Title and content are required.");
        return;
      }

      const res = await axios.post("http://localhost:5000/api/notes", newNote);
      onNoteAdded(res.data); // Notify parent
      setNewNote({ title: "", content: "" });
    } catch (err) {
      const message = err.response?.data?.error || "Something went wrong.";
      setError(message);
    }
  };

  return (
    <Box display="flex" gap={2} mb={3} flexDirection="column">
      <TextField
        label="Title"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      />
      <TextField
        label="Content"
        multiline
        rows={2}
        value={newNote.content}
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
      />
      {error && (
        <Typography color="error" fontSize="0.9rem">
          {error}
        </Typography>
      )}
      <Button variant="contained" onClick={addNote}>
        Add Note
      </Button>
    </Box>
  );
};

export default NoteForm;
