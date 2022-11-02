import path from 'path';
import { promises as fs } from 'fs';

export default async function (req, res) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const file_data = await fs.readFile(jsonDirectory + '/ticket.json', 'utf8')    
    const json_data = JSON.parse(file_data)
    // Do stuff
    res.status(200).json(json_data.ticket)
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error reading data' })
  }
} 