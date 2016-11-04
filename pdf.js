URL url = new File("index.html").toURI().toURL();
WebClient webClient = new WebClient(); 
HtmlPage page = webClient.getPage(url);

OutputStream os = null;
try{
   os = new FileOutputStream("test.pdf");

   ITextRenderer renderer = new ITextRenderer();
   renderer.setDocument(page,url.toString());
   renderer.layout();
   renderer.createPDF(os);
} finally{
   if(os != null) os.close();
}