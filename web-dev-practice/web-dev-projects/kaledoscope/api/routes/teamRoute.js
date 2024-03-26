const { createTeam, allTeams, singleTeam, deleteTeam, updateTeam } = require("../controller/teamController");

const router = require("express").Router()


router.route("/").post(createTeam).get(allTeams)
router.route("/:id").patch(updateTeam).delete(deleteTeam).get(singleTeam)

module.exports = router;