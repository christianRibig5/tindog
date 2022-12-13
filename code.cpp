
class FileOpen
{
public:
    void open(CString filename)
    {
        readFile(filename);
        if (isTextFile(filename))
            processTextFile();
        else if (isBitmapFile(filename))
            processBitmapFile();
        else
        // throw some error
    }

private:
    void readFile(CString filename);
    bool isTextFile(CString filename);
    bool isBitmapFile(CString filename);
    void processTextFile();
    void processBitmapFile();
};
