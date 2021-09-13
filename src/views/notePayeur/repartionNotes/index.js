import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'

const repartionNotes = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
			{/* <iframe src="https://app.powerbi.com/groups/me/reports/aba50d18-409c-4191-83da-3efa2efc8202?ctid=bc772144-1355-43d1-9d45-a283e083df58" onLoad="alert('Test');"></iframe> */}
			<iframe title= "repartaionNotes" width="1100" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiZjFhNmQxOGQtZDgxNC00M2JlLWIyYmUtYTdjYTM5ZWZkYzJhIiwidCI6ImY5Mzg1NjkwLWExOWUtNGY1Yi04MzU4LTQyOGU0YzM3NmE5MiJ9" frameborder="0" allowFullScreen="true"></iframe>
		  </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default repartionNotes
