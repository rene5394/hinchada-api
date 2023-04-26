import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VersionService } from './version.service';
import { Version } from './entities/version.entity';

describe('VersionService', () => {
  let versionService: VersionService;
  let versionRepository;

  const mockVersionRepository = {
    find: jest.fn(),
    findOneBy: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        VersionService,
        {
          provide: getRepositoryToken(Version),
          useValue: mockVersionRepository,
        },
      ],
    }).compile();

    versionService = moduleRef.get<VersionService>(VersionService);
    versionRepository = moduleRef.get(getRepositoryToken(Version));
  });

  describe('findAll', () => {
    it('should return an array of versions', async () => {
      const mockVersions = [{ id: 1, name: 'Version 1' }];
      jest.spyOn(versionRepository, 'find').mockResolvedValueOnce(mockVersions);
      const versions = await versionService.findAll();
      expect(versions).toEqual(mockVersions);
      expect(versionRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return a version', async () => {
      const mockVersion = { id: 1, name: 'Version 1' };
      jest.spyOn(versionRepository, 'findOneBy').mockResolvedValueOnce(mockVersion);
      const version = await versionService.findOne(1);
      expect(version).toEqual(mockVersion);
      expect(versionRepository.findOneBy).toHaveBeenCalledTimes(1);
      expect(versionRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });
  });
});
