import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

import { useCats } from '../store'
import { CatType } from '../types/cat-type'
import { CatCard } from './CatCard'
import { CatForm } from './CatForm'
import { Modal } from './Modal'
import { RemoveCat } from './RemoveCat'

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  padding: 0 20px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    grid-gap: 20px;
  }
`
const AddNewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 20px;
  border-radius: 5px;
  background-color: #eaeaea;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  &:hover {
    box-shadow: 0 10px 30px #d9dbdf;
    background-color: #dfdede;
  }
`
const PlusButton = styled.div`
  font-weight: 400;
  font-size: 28px;
`

const CatList = () => {
  const cats = useCats((state) => state.cats)
  const router = useRouter()

  const [isCatModalOpen, setIsCatModalOpen] = useState(false)
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
  const [selectedCat, setIsSelectedCat] = useState<CatType | null>(null)

  const searchTerm = (router.query.search as string) || ''
  const filteredCats = cats.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.bio.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const openEditCat = (cat: CatType) => {
    setIsSelectedCat(cat)
    setIsCatModalOpen(true)
  }

  const openRemoveCat = (cat: CatType) => {
    setIsSelectedCat(cat)
    setIsRemoveModalOpen(true)
  }

  const closeModal = () => {
    setIsSelectedCat(null)
    setIsCatModalOpen(false)
    setIsRemoveModalOpen(false)
  }

  return (
    <Wrapper>
      {filteredCats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
          openEditCat={openEditCat}
          openRemoveCat={openRemoveCat}
        />
      ))}
      <AddNewCard onClick={() => setIsCatModalOpen(true)}>
        <PlusButton>⊕</PlusButton>
        Add
      </AddNewCard>
      {isCatModalOpen && (
        <Modal closeModal={closeModal}>
          <CatForm cat={selectedCat} onSave={closeModal} />
        </Modal>
      )}
      {isRemoveModalOpen && (
        <Modal closeModal={closeModal}>
          <RemoveCat cat={selectedCat} onClose={closeModal} />
        </Modal>
      )}
    </Wrapper>
  )
}

export default dynamic(() => Promise.resolve(CatList), {
  ssr: false,
})
