const { createForumTable, createOrganization, renderOrganizationForm } = require("../controller/organizationController/organizationController")
const { isAuthenticated } = require("../middleware/isAuthenticated")


const router = require("express").Router()

router.route("/organization").get(renderOrganizationForm).post(isAuthenticated, createOrganization , createForumTable)


module.exports = router