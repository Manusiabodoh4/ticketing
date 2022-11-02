import path from 'path';
import { promises as fs } from 'fs';

export default async function (req, res) {

  const {query} = req
  const {id, tipe} = query  

  try {
    
    const jsonDirectory = path.join(process.cwd(), 'json');
    
    const file_data = await fs.readFile(jsonDirectory + '/'+ tipe +'.json', 'utf8')    
    
    const json_data = JSON.parse(file_data)    

    const detailData = json_data[tipe]?.filter((data)=>data.id == id)

    // Do stuff
    res.status(200).json(detailData[0])
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error reading data' })
  }
} 