// cwd is monorepo root regardless of where it's invoked from
console.log(`The cwd is: ${process.cwd()}`)

// with proposed solution:
/*
const rushConfigPath = path.join(process.env.INVOKED_CWD, 'rush.json')

if (pathExists(rushConfigPath)) {
  console.log('Script invoked from monorepo root')
} else {
  console.log('Script invoked from somewhere other than root')
}
*/
