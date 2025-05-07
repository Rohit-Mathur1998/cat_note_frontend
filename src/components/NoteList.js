// import { useEffect, useState } from "react";
// import { Button } from "@mui/material";

// import axios from "axios";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   IconButton,
//   TextField,
//   Box,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// const NoteList = () => {
//   const [notes, setNotes] = useState([]);
//   const [query, setQuery] = useState("");

//   const fetchNotes = async () => {
//     const res = await axios.get("/api/notes");
//     setNotes(res.data);
//   };

//   const searchNotes = async () => {
//     if (!query) return fetchNotes();
//     const res = await axios.get(`/api/notes/search?q=${query}`);
//     setNotes(res.data);
//   };

//   const deleteNote = async (id) => {
//     await axios.delete(`/api/notes/${id}`);
//     fetchNotes();
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   return (
//     <Box>
//       <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
//         <TextField
//           label="Search notes..."
//           variant="outlined"
//           fullWidth
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <Button variant="contained" onClick={searchNotes}>
//           Search
//         </Button>
//       </Box>

//       <Grid container spacing={2}>
//         {notes.map((note) => (
//           <Grid item xs={12} sm={6} md={4} key={note._id}>
//             <Card variant="outlined" sx={{ position: "relative" }}>
//               <CardContent>
//                 <Typography variant="h6">{note.title}</Typography>
//                 <Typography variant="body2" sx={{ my: 1 }}>
//                   {note.content}
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary">
//                   🐱 {note.catfact}
//                 </Typography>
//                 <IconButton
//                   aria-label="delete"
//                   onClick={() => deleteNote(note._id)}
//                   sx={{ position: "absolute", top: 5, right: 5 }}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default NoteList;

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

// const NoteList = () => {
//   const [notes, setNotes] = useState([]);
//   const [query, setQuery] = useState("");
//   const [newNote, setNewNote] = useState({ title: "", content: "" });

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

//   const addNote = async () => {
//     if (!newNote.title || !newNote.content) return;
//     const res = await axios.post("http://localhost:5000/api/notes", newNote);
//     setNotes([res.data, ...notes]); // Add new note to the top
//     setNewNote({ title: "", content: "" }); // Reset input fields
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   return (
//     <>
//       {/* Add Note Section */}
//       <Box display="flex" gap={2} mb={3} flexDirection="column">
//         <TextField
//           label="Title"
//           value={newNote.title}
//           onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
//         />
//         <TextField
//           label="Content"
//           multiline
//           rows={2}
//           value={newNote.content}
//           onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
//         />
//         <Button variant="contained" onClick={addNote}>
//           Add Note
//         </Button>
//       </Box>

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

// export default NoteList;

import { useEffect, useState } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  IconButton,
  TextField,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteList = ({ notes, setNotes }) => {
  const [query, setQuery] = useState("");

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/api/notes");
    setNotes(res.data);
  };

  const searchNotes = async () => {
    if (!query) return fetchNotes();
    const res = await axios.get(
      `http://localhost:5000/api/notes/search?q=${query}`
    );
    setNotes(res.data);
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      {/* Search Section */}
      <Box display="flex" gap={2} mb={4}>
        <TextField
          fullWidth
          placeholder="Search notes or cat facts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outlined" onClick={searchNotes}>
          Search
        </Button>
      </Box>

      {/* Notes List */}
      <List>
        {notes.map((note) => (
          <ListItem
            key={note._id}
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              mb: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">{note.title}</Typography>
                  <IconButton onClick={() => deleteNote(note._id)} size="small">
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {note.content}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 2, display: "block" }}
                >
                  🐱 {note.catfact}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NoteList;
