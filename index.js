const employees = ['BIMO', 'SULTHAN', 'FAHMI', 'BRAM', 'WAHYU', 'MUIZ']
const teams = [
    ['BIMO', 'SULTHAN'],
    ['FAHMI', 'BRAM'],
    ['WAHYU', 'SULTHAN'],
    ['BRAM', 'MUIZ']
]

const targetEmployee1 = 'BIMO', targetEmployee2 = 'WAHYU'
const adjencyList = new Map()
// CHECK IS TARGET 1 AND TARGET 2 ARE IN THE SAME TEAM

function addNode(employee) {
    adjencyList.set(employee, [])
}
function addEdge(target1, target2) {
    adjencyList.get(target1).push(target2)
    adjencyList.get(target2).push(target1)
}

function dfs(target1, target2, visited = new Set()) {
    visited.add(target1)
    let flag = false
    const allEmployees = adjencyList.get(target1)
    for (const employee of allEmployees) {
        if (employee == target2) {
            visited.add(target2)
            break
        }
        if (!visited.has(employee)) {
            dfs(employee, targetEmployee2, visited)
        }
    }
    if (visited.has(target2)) {
        flag = true
    }
    return flag
}
function main() {
    employees.forEach(addNode)
    teams.forEach(subTeam => addEdge(...subTeam))
    console.log(adjencyList)
    const temp = dfs(targetEmployee1, targetEmployee2)
    console.log(temp)
}


main()