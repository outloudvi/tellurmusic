// Music.json validator

"use strict";

const path = require("path")

function assert(status, string) {
    if (typeof status === 'function') status = status()
    if (status) {
        console.log(">> " + string + " ... OK")
    } else {
        console.log(">> " + string + " ... FAILED!")
        throw Error("Assertion failed: " + string)

    }
}

function typeRightOrDoesntExist(str, typ) {
    if (str === undefined) return true
    if (typeof str === typ) return true
    return false
}

function checkEmbed(embed) {
    return (
        typeRightOrDoesntExist(embed.soundcloud, "number") &&
        typeRightOrDoesntExist(embed.ncm, "number") &&
        typeRightOrDoesntExist(embed.youtube, "string")
    )
}

function validate(data) {
    assert(data instanceof Array, "An array is saved")
    assert(() => {
        let idmap = data.map(x => x.id)
        return idmap.map((elem, pos) => idmap.indexOf(elem) == pos)
            .filter(x => x !== true)
            .length === 0
    }, "IDs don't duplicate")
    assert(data.map(x => Object.keys(x.embed).length)
        .filter(x => x === 0)
        .length === 0
        , "All songs have embed links")
    assert(data.map(x => x.title)
        .filter(x => x === undefined || x == "")
        .length === 0
        , "All songs have titles")
    assert(data.map(x => x.author)
        .filter(x => x === undefined || x == "")
        .length === 0
        , "All songs have authors")
    assert(data.map(x => x.embed)
        .filter(x => checkEmbed(x) !== true)
        .length === 0
        , "All songs have embed links")
    return true
}

function main() {
    if (process.argv[2]) {
        let jsonFile = require(
            path.join(process.cwd(), process.argv[2])
        )
        validate(jsonFile)
    } else {
        console.error("Filename not found.")
        process.exit(1)
    }
}

main()
