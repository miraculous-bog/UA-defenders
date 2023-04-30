const getTest = async (req, res, next) => {
	return res.status(200).json({ message: `Test have fallen` });
}
module.exports = {
	getTest,
}
// getTest, postTest