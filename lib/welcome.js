import { DOMImplementation, XMLSerializer } from 'xmldom';
import JsBarcode from 'jsbarcode';
import { JSDOM } from 'jsdom';  
import { readFileSync } from 'fs';
import { join } from 'path';
import { spawn } from 'child_process';

const src = join(__dirname, '..', 'src')
const _svg = readFileSync(join(src, 'welcome.svg'), 'utf-8')
const barcode = data => {
    const xmlSerializer = new XMLSerializer();
    const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    JsBarcode(svgNode, data, {
        xmlDocument: document,
    });

    return xmlSerializer.serializeToString(svgNode);
}
const imageSetter = (img, value) => img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value)
const textSetter = (el, value) => el.textContent = value

let { document: svg } = new JSDOM(_svg).window
/**
 * Generate SVG Welcome
 * @param {object} param0
 * @param {string} param0.wid
 * @param {string} param0.pp
 * @param {string} param0.name
 * @param {string} param0.text
 * @param {string} param0.background
 * @returns {string}
 */
const genSVG = async ({

    pp = join(src, 'avatar_contact.png'),
} = {}) => {
    let el = {
        pp: ['#_1661899539392 > g:nth-child(3) > image', imageSetter, pp],
    }
    for (let [selector, set, value] of Object.values(el)) {
        set(svg.querySelector(selector), value)
    }
    return svg.body.innerHTML
}

const toImg = (svg, format = 'png') => new Promise((resolve, reject) => {
    if (!svg) return resolve(Buffer.alloc(0))
    let bufs = []
    let im = spawn('magick', ['convert', 'svg:-', format + ':-'])
    im.on('error', e => reject(e))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(Buffer.from(svg))
    im.stdin.end()
    im.on('close', code => {
        if (code !== 0) reject(code)
        resolve(Buffer.concat(bufs))
    })
})

const toBase64 = (buffer, mime) => `data:${mime};base64,${buffer.toString('base64')}`

/**
 * Render SVG Welcome
 * @param {object} param0
 * @param {string} param0.wid
 * @param {string} param0.pp
 * @param {string} param0.name
 * @param {string} param0.text
 * @param {string} param0.background
 * @returns {Promise<Buffer>}
 */
const render = async ({
    pp = toBase64(readFileSync(join(src, 'avatar_contact.png')), 'image/png'),
} = {}, format = 'png') => {
    let svg = await genSVG({
 pp,
    })
    return await toImg(svg, format)
}

if (require.main === module) {
    render({
        // pp: '',
        // background: ''
    }, 'jpg').then(result => {
        // console.log(result)
        process.stdout.write(result)
    })
    // toImg(barcode('test')).then(result => {
    //     // console.log(result)
    //     process.stdout.write(result)

    // })
} else module.exports = render
