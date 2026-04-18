let preciosProductos = [2,4,8,16,32,64,128,256,512,1024]

let preciosProductosConIva = preciosProductos.map((precio) => precio *= 1.21)

preciosProductosConIva.forEach((elemento) =>
    console.log(`El precio es: ${elemento}.- IVA incluido.`)
)