import './App.css'
import { EnquiryForm, ResponseBox } from "./index.js"
import { useSelector } from 'react-redux'

function App() {
  const { loading, error, enquiryData } = useSelector((state) => state.enquiry);

  return (
    <>
      <ResponseBox loading={loading} error={error} data={enquiryData?.data} />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <EnquiryForm />
      </div>
    </>
  )
}

export default App
