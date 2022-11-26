import React, { useEffect, useState } from 'react'
import Nav from '../../Req/Nav'
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: "16px",
  border: '1px solid #eaeaea',

};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: "800px",
  height: "400px",
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit:"contain"
};


function Create() {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section>
      <Nav />
      <section className="whole-section">
      <div  {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div className='drop-filesthing'>
        <p className='text-center sdaiuinmbv'>Drop you files here</p>
        </div>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>

      <div>
        <form action="">
            <div className='create-pin'>
              <input type="text" name="" id="" placeholder='Title*' autoFocus required/>
            </div>
            <div className='create-pin my-4'>
              <textarea name="" id="" className='sadas-test' placeholder='Description*'></textarea>
            </div>
            <div className='create-pin'>
              <input type="text" name="" id="" placeholder='Enter your tags' />
              <div className='recommendation-tag-create mt-10'>
                <h2>Recommend tag</h2>
                <div className='flex gap-2 my-5'>
                  <div className='border px-2 py-2 border-solid border-[#ccc] text-[#3d7699] text-sm cursor-pointer'>background</div>
                  <div className='border px-2 py-2 border-solid border-[#ccc] text-[#3d7699] text-sm cursor-pointer'>nature</div>
                  <div className='border px-2 py-2 border-solid border-[#ccc] text-[#3d7699] text-sm cursor-pointer'>workinflow</div>
                  <div className='border px-2 py-2 border-solid border-[#ccc] text-[#3d7699] text-sm cursor-pointer'>cat</div>
                  <div className='border px-2 py-2 border-solid border-[#ccc] text-[#3d7699] text-sm cursor-pointer'>scenery</div>
                </div>
              </div>
            </div>
            <div>
              <button className='submit-btn' type='submit'>Submit</button>
            </div>
        </form>
      </div>
    </section>
    </section>
  )
}

export default Create