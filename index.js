
const client = new Soundboard()
client.init("commands", "events", "models")
client.login(client.config.token)

module.exports = client