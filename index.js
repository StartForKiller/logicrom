const { Command } = require('commander')
const fs = require('fs')

const program = new Command()

const generateTabs = false

function nearestPow2(number) {
    return Math.pow(2, Math.round(Math.log(number) / Math.log(2)))
}

function getByteArray(filePath){
    let fileData = fs.readFileSync(filePath)
    let newBuffer = Buffer.alloc(nearestPow2(fileData.length))
    fileData.copy(newBuffer)
    return newBuffer
}

function generateAddressData(buffer, currAddress, tabs, output) {
    for(let i = 0; i < 8; i++) {
        output.string += `${'\t'.repeat(generateTabs ? tabs : 0)}out[${i}'] = ${(buffer[currAddress] & (1 << i)) ? 1 : 0}\n`
    }
}

function generateAddressBitLogic(buffer, currAddress, bitInLogic, output, bits) {
    output.string += `${'\t'.repeat(generateTabs ? (bits - bitInLogic) : 0)}if in[${bitInLogic}']\n`

    currAddress += (1 << bitInLogic)
    if(bitInLogic != 0) {
        generateAddressBitLogic(buffer, currAddress, bitInLogic - 1, output, bits)
    } else {
        generateAddressData(buffer, currAddress, bits + 1, output)
    }
    currAddress -= (1 << bitInLogic)

    output.string += `${'\t'.repeat(generateTabs ? (bits - bitInLogic) : 0)}else\n`
    if(bitInLogic != 0) {
        generateAddressBitLogic(buffer, currAddress, bitInLogic - 1, output, bits)
    } else {
        generateAddressData(buffer, currAddress, bits + 1, output)
    }
    output.string += `${'\t'.repeat(generateTabs ? (bits - bitInLogic) : 0)}end\n`
}

function generateLogic(buffer) {
    let output = {
        string: 'any\n'
    }

    bits = Math.round(Math.log2(buffer.length))

    generateAddressBitLogic(buffer, 0, bits - 1, output, bits)
    return output.string + 'end\n'
}

function generateCode(buffer) {
    return generateLogic(buffer);
}

async function main() {
    program.version('0.0.1')
    program
        .option('-s, --size [Number]', 'size of the file in bytes')
        .requiredOption('-i, --input [String]', 'input raw file')
        .option('-o, --output [String]', 'output lsx file')
    
        program.parse(process.argv)

        let code = generateCode(getByteArray(program.opts().input))

        fs.writeFile(program.opts().output !== undefined ? program.opts().output : 'out.lsx', code, function() {});
}

main()