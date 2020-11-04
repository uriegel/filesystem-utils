declare enum DriveType {
	UNKNOWN,
	HARDDRIVE,
	ROM,
	REMOVABLE,
	NETWORK
}

interface DriveItem {
    name: string
    description: string
    size: number
    type: DriveType 
    isMounted: boolean
}

interface FileItem {
    name: string
    isDirectory: boolean
    isHidden: boolean
    size: number 
    time: Date
}

declare module 'filesystem-utilities' {
    function getDrives(): Promise<DriveItem[]>
    function getFiles(directory: string): Promise<FileItem[]>
}