const teamMemberModel = require("../models/teamMemberModel");

// Create a new team member
exports.createTeam = ('/api/team', upload.single('image'), async (req, res) => {
    try {
        const { name, position } = req.body;
        let image;
        if (!req.file) {
            image = "https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
        } else {
            image = "http://localhost:8000/" + req.file.filename
        }
        const teamMember = new teamMemberModel({ name, position, image });
        await teamMember.save();
        res.json({ success: true, message: 'Team member created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
  });
  
  // Retrieve all team members
  exports.allTeams = ('/api/team', async (req, res) => {
    try {
        const teamMembers = await TeamMember.find();
        res.json(teamMembers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  // Retrieve a single team member by ID
  exports.singleTeam = ('/api/team/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const teamMember = await TeamMember.findById(id);
  
        if (!teamMember) {
            return res.status(404).json({ success: false, message: 'Team member not found' });
        }
        res.json(teamMember);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
  });
  
  // Update a team member by ID
  exports.updateTeam = ('/api/team/:id', upload.single('image'), async (req, res) => {
    try {
        const { name, position } = req.body;
        const { id } = req.params;
  
        let imageUrl;
        if (req.file) {
            imageUrl = "http://localhost:8000/" + req.file.filename;
        }
  
        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (position) updatedFields.position = position;
        if (imageUrl) updatedFields.image = imageUrl;
  
        const updatedTeamMember = await TeamMember.findByIdAndUpdate(id, updatedFields, { new: true });
  
        if (!updatedTeamMember) {
            return res.status(404).json({ success: false, message: 'Team member not found' });
        }
  
        res.json({ success: true, message: 'Team member updated successfully', data: updatedTeamMember });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
  });
  
  // Delete a team member by ID
  exports.deleteTeam = ('/api/team/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTeamMember = await TeamMember.findByIdAndDelete(id);
  
        if (!deletedTeamMember) {
            return res.status(404).json({ success: false, message: 'Team member not found' });
        }
  
        res.json({ success: true, message: 'Team member deleted successfully', data: deletedTeamMember });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
  });


// // Create a new team member
// app.post('/api/team', upload.single('image'), async (req, res) => {
//     try {
//         const { name, position } = req.body;
//         let image;
//         if (!req.file) {
//             image = "https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
//         } else {
//             image = "http://localhost:8000/" + req.file.filename
//         }
//         const teamMember = new teamMemberModel({ name, position, image });
//         await teamMember.save();
//         res.json({ success: true, message: 'Team member created successfully' });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
//   });
  
//   // Retrieve all team members
//   app.get('/api/team', async (req, res) => {
//     try {
//         const teamMembers = await TeamMember.find();
//         res.json(teamMembers);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//   });
  
//   // Retrieve a single team member by ID
//   app.get('/api/team/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const teamMember = await TeamMember.findById(id);
  
//         if (!teamMember) {
//             return res.status(404).json({ success: false, message: 'Team member not found' });
//         }
//         res.json(teamMember);
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
//   });
  
//   // Update a team member by ID
//   app.put('/api/team/:id', upload.single('image'), async (req, res) => {
//     try {
//         const { name, position } = req.body;
//         const { id } = req.params;
  
//         let imageUrl;
//         if (req.file) {
//             imageUrl = "http://localhost:8000/" + req.file.filename;
//         }
  
//         const updatedFields = {};
//         if (name) updatedFields.name = name;
//         if (position) updatedFields.position = position;
//         if (imageUrl) updatedFields.image = imageUrl;
  
//         const updatedTeamMember = await TeamMember.findByIdAndUpdate(id, updatedFields, { new: true });
  
//         if (!updatedTeamMember) {
//             return res.status(404).json({ success: false, message: 'Team member not found' });
//         }
  
//         res.json({ success: true, message: 'Team member updated successfully', data: updatedTeamMember });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
//   });
  
//   // Delete a team member by ID
//   app.delete('/api/team/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedTeamMember = await TeamMember.findByIdAndDelete(id);
  
//         if (!deletedTeamMember) {
//             return res.status(404).json({ success: false, message: 'Team member not found' });
//         }
  
//         res.json({ success: true, message: 'Team member deleted successfully', data: deletedTeamMember });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
//   });